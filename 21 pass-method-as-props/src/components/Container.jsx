import styles from "./Container.module.css"

// (props) = ({children,asdf}) isko aise bhi kar sakte hai 
// 
const Container = (props) => {
    return <div className={styles.container}>{props.children}</div>
};

export default Container;