---
title: How to turn Markdown files into ✨beautiful✨ blog posts :)
date: 04-01-2026
tags: [ React, TypeScript ]
excerpt: Using React Markdown to parse and render Markdown files as blog posts
---

## I. Skyblog

I missed the train on [Skyblog](https://web.archive.org/web/20210811202235/https://jul135-officiel.skyrock.com/) a long
time ago. I always liked reading blog articles, and it was time I got my own. Since I like writing code, I decided to
incorporate it to my own website, instead of using a third party service.

I needed to find a way to simply write a text file, serve it on my website, and it would automatically render it. I also
like the idea of having all my text files and resources available in plain text.

Markdown is the perfect tool for this use case as it's easier to write
than HTML, powerful enough to render complex layouts, and easily customizable. You can find this
post's md file [here](./from-markdown-to-blogpost.md).

## II. React Markdown

I put all my .md files in a "blog" folder under the /public directory, as it allows me to serve them as files
statically. I then request the index.json file at the root of this folder and get the list of my blog
posts. You can check it out in plain text [here](./index.json). I like to have all the files
available for educational purposes, so everyone can follow along.

To render a Markdown file, I first needed to parse it into a React component. I
used [react-markdown](https://github.com/remarkjs/react-markdown) to do just that.

~~~tsx
export function BlogPost() {
    // get the post's slug from the route
    const {slug} = useParams();
    const {post} = useBlogPost(slug);
    return (
        <article>
            <header>{post.title}</header>
            <Markdown>{post.content}</Markdown>
        </article>
    );
}
~~~

## III. Customizing Components

It also allows me to customize the rendering of the different elements. For example, I can intercept the render of a <a>
tag and use a <Link> component from React Router instead. I can get the `href` prop and resolve it to other blog posts
using `./relative/path/to/post.md` syntax, instead of depending on the url of a post that might change in the future.

For this, React Markdown exposes a `components` prop that allows me to override the rendering of different elements.
It's quite flexible and exposes a lot of options for each element, from which I can pick and choose the ones I need.
It takes an object that exposes a function for each element, with arguments for the element's attributes. An <a> tag
exposes href and many other attributes. I simply destructure the ones I need for styling, group the rest into `...rest`,
and feed them to the component.

~~~tsx
function resolveUrl(url: string): string {
    const currentUrl = new URL("blog/", window.location.origin + import.meta.env.BASE_URL);
    // this will return url if it's absolute, or currentUrl/url if it's relative
    return new URL(url, currentUrl).toString();
}

<Markdown
    components={{
        a({href, children, ...rest}) {
            return <Link to={resolveUrl(href)} {...rest} >{children}</Link>
        }
    }}>
    {post.content}
</Markdown>
~~~

I customized pretty much all tags I used in my Markdown files, and it's a great way to make my posts look **exactly**
like I want them to.

## IV. Syntax Highlighter for code blocks

Since my blog is mostly about programming (for now!), I wanted to add syntax highlighting to my code blocks.
I used [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) for that.
I can intercept the `<code>` block from my Markdown, parse the language, use `<SyntaxHighligther>`, and
wrap it in a `<Terminal>` custom component for a cooler look 😎.

~~~tsx
<Markdown
    components={{
        code({node, children, className, ...rest}) {
            const match = /language-(\w+)/.exec(className || "");
            const lang = match?.[1];
            if (!lang) return <code {...rest}>{children}</code>;
            return (
                <Terminal title={lang}>
                    <SyntaxHighlighter language={lang} {...rest}>{String(children)}</SyntaxHighlighter>
                </Terminal>
            )
        },
    {/* other components */}
    }}>
    {post.content}
</Markdown>
~~~

Hurraay!

\`\`\`ts

const foo = () => "bar";

\`\`\`

turns into

~~~ts
const foo = () => "bar";
~~~

Well.. not exactly. I made a few adjustments that I didn't show in the code snippet above.
Firstly, I changed `<Terminal title={lang}>` to `<Terminal title={languageNames[lang] ?? "Code"}>` to parse the language
from "ts," "tsx," "rs" to "TypeScript," "React (TypeScript)", "Rust" for convinience. I also used a premade theme that I
customized for the syntax highlighter depending on the theme of my app, and a few other tweaks. You can always check the
current code on the [github repo](https://github.com/Aubregine/portfolio-2025).

## V. Custom Components ??

The `<code>` block syntax in Markdown allows us to parse the language name, but also some arguments after it! I can
create a block with a custom "language", and render it using any component I want! I can even pass arguments as strings.

\`\`\`componentName arg1 arg2  
custom data ???  
\`\`\`

~~~tsx
const customWidgets = {
    typewriter: ({args, children}) => (
        <Typewriter
            reverse={args.includes("reverse")}
            loop={args.includes("loop")}
            lines={children as string[]}
        />
    ),
}

export function BlogPost() {
    // initialization...

    return (
        <Markdown components={{
            code({node, children, className, ...rest}) {
                const match = /language-(\w+)/.exec(className || "");
                const lang = match?.[1];
                const args = node?.data?.meta?.split(" ") ?? [];
                if (customWidgets[lang]) {
                    return customWidgets[lang]({args, children: String(children)});
                }
                return (
                    <Terminal title={languageNames[lang] ?? "Code"}>
                        <SyntaxHighlighter
                            {...rest}
                            children={String(children)}
                            language={lang}
                        />
                    </Terminal>
                );
            },
        {/* other components */}
        }}>
            {post.content}
        </Markdown>
    );
}
~~~

And now we can simply write:

\`\`\`typewriter reverse loop  
Custom  
Data  
Here  
\`\`\`

And we get the beautiful [typewriter](./i-built-a-typewriter-in-react) effect I made the other day. That's pretty cool!

```typewriter reverse loop 
Custom
Data
Here
```

I will continue to add more and more custom components to my blog to make it feel alive!
