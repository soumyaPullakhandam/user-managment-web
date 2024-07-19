const historyManager = (history, name) => {
    history.push({
        pathname: name
    })
}
export default historyManager;
