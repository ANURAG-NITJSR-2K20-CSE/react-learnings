import styles from "./Container.module.css"

// (props) = ({children,asdf}) isko aise bhi kar sakte hai 
// children aur props dono ko pass kar sakte hai array destructuring
const Container = (props) => {
    return <div className={styles.container}>{props.children}</div>
};

export default Container;