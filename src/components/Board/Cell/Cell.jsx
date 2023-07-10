const Cell = ({draw}) => {
    return (
        <div className="cell">
            <article>
                <p>{draw}</p>
            </article>
        </div>
    );
}

export default Cell;