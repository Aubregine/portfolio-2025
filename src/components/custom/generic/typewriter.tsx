import { assign, createMachine } from "xstate";
import { useMachine } from "@xstate/react";

interface TypewriterProps {
  lines: string[];
  loop?: boolean;
  reverse?: boolean;
  className?: string;
}

const typewriterMachine = createMachine({
  id: "typewriter",
  types: {} as {
    context: {
      lines: string[];
      loop: boolean;
      reverse: boolean;
      line: number;
      text: string;
    };
    input: {
      lines: string[];
      loop: boolean;
      reverse: boolean;
    };
  },
  initial: "typing",
  context: ({ input }: { input: { lines: string[]; loop: boolean; reverse: boolean } }) => ({
    lines: input.lines,
    loop: input.loop,
    reverse: input.reverse,
    line: 0,
    text: "",
  }),
  states: {
    typing: {
      after: {
        100: [
          {
            guard: ({ context }) => context.text !== context.lines[context.line],
            actions: assign({
              text: ({ context }) =>
                context.lines[context.line]!.substring(0, context.text.length + 1),
            }),
            target: "typing",
            reenter: true,
          },
          {
            guard: ({ context }) => context.reverse,
            target: "stopThenReverse",
          },
          {
            target: "stopThenNextLine",
          },
        ],
      },
    },
    reverse: {
      after: {
        50: [
          {
            guard: ({ context }) =>
              context.lines.length > 1 &&
              !context.lines[(context.line + 1) % context.lines.length]!.startsWith(context.text),
            actions: assign({
              text: ({ context }) =>
                context.lines[context.line]!.substring(0, context.text.length - 1),
            }),
            target: "reverse",
            reenter: true,
          },
          {
            guard: ({ context }) =>
              context.lines.length > 1 &&
              context.lines[(context.line + 1) % context.lines.length]!.startsWith(context.text),
            target: "stopThenNextLine",
          },
          {
            guard: ({ context }) => context.lines.length === 1 && context.text === "",
            target: "stopThenNextLine",
          },
          {
            actions: assign({
              text: ({ context }) =>
                context.lines[context.line]!.substring(0, context.text.length - 1),
            }),
            target: "reverse",
            reenter: true,
          },
        ],
      },
    },
    stopThenNextLine: {
      after: {
        200: [
          {
            guard: ({ context }) => context.line < context.lines.length - 1,
            actions: assign({
              line: ({ context }) => context.line + 1,
              text: ({ context }) => (context.reverse ? context.text : ""),
            }),
            target: "typing",
          },
          {
            guard: ({ context }) => context.line === context.lines.length - 1 && context.loop,
            actions: assign({
              line: 0,
              text: ({ context }) => (context.reverse ? context.text : ""),
            }),
            target: "typing",
          },
          {
            guard: ({ context }) => context.line === context.lines.length - 1 && !context.loop,
            target: "done",
          },
        ],
      },
    },
    stopThenReverse: {
      after: {
        500: [
          {
            guard: ({ context }) => context.line < context.lines.length - 1,
            target: "reverse",
          },
        ],
        2000: [
          {
            guard: ({ context }) => context.line === context.lines.length - 1,
            target: "reverse",
          },
        ],
      },
    },
    done: {},
  },
});

export function Typewriter({ lines, loop = false, reverse = false, className }: TypewriterProps) {
  const [state, _send] = useMachine(typewriterMachine, {
    input: {
      lines,
      loop,
      reverse,
    },
  });
  const text = state.context.text;

  return (
    <span className={className}>
      {text}
      <span className="border-primary animate-pulse border-r-2" />
    </span>
  );
}
