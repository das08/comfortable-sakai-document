import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CodeSandboxExample({ name }: { name: string }): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    // const path = `${siteConfig.organizationName}/${siteConfig.projectName}/tree/${siteConfig.customFields.branch}/examples/${name}`;
    const path = "kyoto-u/comfortable-sakai/tree/example/examples/Entity";
    return (
        <>
            <ul>
                <li>
                    <a href={`https://codesandbox.io/s/github/${path}`}>Open in CodeSandbox</a>
                </li>
                <li>
                    <a href={`https://github.com/${path}`}>Show Source</a>
                </li>
            </ul>
            <iframe
                title="Example Preview"
                className="embedded-iframe"
                src={`https://codesandbox.io/embed/github/${path}?autoresize=1&fontsize=14&theme=light`}
            >
                Example Preview not available
            </iframe>
        </>
    );
}
