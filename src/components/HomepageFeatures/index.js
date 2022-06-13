import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Open Source Software',
        Svg: require('@site/static/img/github-logo.svg').default,
        description: (
            <>
                Comfortable Sakai is an Open Source Software. Anyone could develop and add new features to the extension.
            </>
        ),
    },
    {
        title: 'Multi-language Support',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Comfortable Sakai supports multiple languages. As of now, we are supporting English and Japanese.
                Contributions of i18n are always welcome!
            </>
        ),
    },

    {
        title: 'Supports Major Browsers',
        Svg: require('@site/static/img/chrome-icon.svg').default,
        description: (
            <>
                Comfortable Sakai supports Google Chrome, Microsoft Edge, Firefox, and Safari.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
