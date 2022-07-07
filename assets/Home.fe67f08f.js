import{R as e}from"./index.97b01244.js";import{u as m,w as x,N as o,a as f,C as u}from"./app.84518757.js";const w=`
.home-hero {
  margin: 2.5rem 0 2.75rem;
  padding: 0 1.5rem;
  text-align: center;
}

@media (min-width: 420px) {
  .home-hero {
    margin: 3.5rem 0;
  }
}

@media (min-width: 720px) {
  .home-hero {
    margin: 4rem 0 4.25rem;
  }
}

.figure {
  padding: 0 1.5rem;
}

.image {
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  max-height: 280px;
}

.title {
  margin-top: 1.5rem;
  font-size: 2rem;
}

@media (min-width: 420px) {
  .title {
    font-size: 3rem;
  }
}

@media (min-width: 720px) {
  .title {
    margin-top: 2rem;
  }
}

.tagline {
  margin: 0;
  margin-top: 0.25rem;
  line-height: 1.3;
  font-size: 1.2rem;
  color: var(--c-text-light);
}

@media (min-width: 420px) {
  .tagline {
    line-height: 1.2;
    font-size: 1.6rem;
  }
}

.action {
  margin-top: 1.5rem;
  display: inline-block;
}

.action.alt {
  margin-left: 1.5rem;
}

@media (min-width: 420px) {
  .action {
    margin-top: 2rem;
    display: inline-block;
  }
}

.action :deep(.item) {
  display: inline-block;
  border-radius: 6px;
  padding: 0 20px;
  line-height: 44px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-bg);
  background-color: var(--c-brand);
  border: 2px solid var(--c-brand);
  transition: background-color 0.1s ease;
}

.action.alt :deep(.item) {
  background-color: var(--c-bg);
  color: var(--c-brand);
}

.action :deep(.item:hover) {
  text-decoration: none;
  color: var(--c-bg);
  background-color: var(--c-brand-light);
}

@media (min-width: 420px) {
  .action :deep(.item) {
    padding: 0 24px;
    line-height: 52px;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
`;var E=()=>{const{site:a,frontmatter:t}=m(),n=(()=>{const{heroImage:s,heroText:d,tagline:h,actionLink:p,actionText:g}=t;return s||d||h||p&&g})(),i=()=>t.heroText||a.title,r=()=>t.tagline||a.description,l={link:t.altActionLink,text:t.altActionText},c={link:t.actionLink,text:t.actionText};return e.createElement(e.Fragment,null,e.createElement("style",null,w),n&&e.createElement("header",{className:"home-hero"},t.heroImage&&e.createElement("figure",{className:"figure"},e.createElement("img",{className:"image",src:x(t.heroImage),alt:t.heroAlt})),i&&e.createElement("h1",{id:"main-title",className:"title"},i),r&&e.createElement("p",{className:"tagline"},r),t.actionLink&&t.actionText&&e.createElement(o,{item:c,className:"action"}),t.altActionLink&&t.altActionText&&e.createElement(o,{item:l,className:"action alt"})))};const v=`
.home-features {
  margin: 0 auto;
  padding: 2.5rem 0 2.75rem;
  max-width: 960px;
}

.home-hero + .home-features {
  padding-top: 0;
}

@media (min-width: 420px) {
  .home-features {
    padding: 3.25rem 0 3.5rem;
  }

  .home-hero + .home-features {
    padding-top: 0;
  }
}

@media (min-width: 720px) {
  .home-features {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}

.wrapper {
  padding: 0 1.5rem;
}

.home-hero + .home-features .wrapper {
  border-top: 1px solid var(--c-divider);
  padding-top: 2.5rem;
}

@media (min-width: 420px) {
  .home-hero + .home-features .wrapper {
    padding-top: 3.25rem;
  }
}

@media (min-width: 720px) {
  .wrapper {
    padding-right: 0;
    padding-left: 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 392px;
}

@media (min-width: 720px) {
  .container {
    max-width: 960px;
  }
}

.features {
  display: flex;
  flex-wrap: wrap;
  margin: -20px -24px;
}

.feature {
  flex-shrink: 0;
  padding: 20px 24px;
  width: 100%;
}

@media (min-width: 720px) {
  .feature {
    width: calc(100% / 3);
  }
}

.title {
  margin: 0;
  border-bottom: 0;
  line-height: 1.4;
  font-size: 1.25rem;
  font-weight: 500;
}

@media (min-width: 420px) {
  .title {
    font-size: 1.4rem;
  }
}

.details {
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  color: var(--c-text-light);
}

.title + .details {
  padding-top: 0.25rem;
}
`;var b=()=>{const{frontmatter:a}=m(),t=a.features&&a.features.length>0,n=a.features?a.features:[];return e.createElement(e.Fragment,null,e.createElement("style",null,v),t&&e.createElement("div",{className:"home-features"},e.createElement("div",{className:"wrapper"},e.createElement("div",{className:"container"},e.createElement("div",{className:"features"},n.map((i,r)=>e.createElement("section",{key:r,className:"feature"},i.title&&e.createElement("h2",{className:"title"},i.title),i.details&&e.createElement("p",{className:"details"},i.details))))))))};const N=`
.footer {
  margin: 0 auto;
  max-width: 960px;
}

@media (min-width: 720px) {
  .footer {
    padding: 0 1.5rem;
  }
}

.container {
  padding: 2rem 1.5rem 2.25rem;
}

.home-hero + .footer .container,
.home-features + .footer .container,
.home-content + .footer .container {
  border-top: 1px solid var(--c-divider);
}

@media (min-width: 420px) {
  .container {
    padding: 3rem 1.5rem 3.25rem;
  }
}

.text {
  margin: 0;
  text-align: center;
  line-height: 1.4;
  font-size: 0.9rem;
  color: var(--c-text-light);
}
`;var k=()=>{const{frontmatter:a}=m();return e.createElement(e.Fragment,null,e.createElement("style",null,N),a.footer&&e.createElement("footer",{className:"footer"},e.createElement("div",{className:"container"},e.createElement("p",{className:"text"},a.footer))))};const y="_home_1ognm_1";var z={home:y};const A=()=>e.createElement("main",{className:f(z,"home"),"aria-labelledby":"main-title"},e.createElement(E,null),e.createElement("slot",{name:"hero"}),e.createElement(b,null),e.createElement("div",{className:"home-content"},e.createElement(u,null)),e.createElement("slot",{name:"features"}),e.createElement(k,null),e.createElement("slot",{name:"footer"}));export{A as default};
