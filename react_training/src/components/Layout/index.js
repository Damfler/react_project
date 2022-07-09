import s from "./index.module.css";

const Layout = ({ title, descr, urlBg, colorBg, children }) => {
  const bgi = urlBg
    ? { backgroundImage: "url(" + urlBg + ")" }
    : colorBg
    ? { background: colorBg }
    : {};

  return (
    <section className={s.root} style={bgi}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={"s.desc s.full"}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
