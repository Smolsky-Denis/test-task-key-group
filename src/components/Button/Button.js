import React from 'react';


export const Button = (props) => {
    const {name, className, onClick} = props.data;
    // {/*<button type="button" className="btn btn-primary">Главный</button>*/}
    // {/*< button*/}
    // {/*type = "button"*/}
    // {/*className = "btn btn-secondary" > Вторичный < /button>*/}
    // {/*<button type="button" className="btn btn-success">Успех</button>*/}
    // {/*< button*/}
    // {/*type = "button"*/}
    // {/*className = "btn btn-danger" > Опасность < /button>*/}
    // {/*<button type="button" className="btn btn-warning">Предупреждение</button>*/}
    // {/*< button*/}
    // {/*type = "button"*/}
    // {/*className = "btn btn-info" > Инфо < /button>*/}
    // {/*<button type="button" className="btn btn-light">Светлый</button>*/}
    // {/*< button*/}
    // {/*type = "button"*/}
    // {/*className = "btn btn-dark" > Темный < /button>*/}

    // {/*<button type="button" className="btn btn-link">Линк</button>*/}

    return (
        <div>
            <button className={className} onClick={onClick} type="button">{name}</button>
        </div>
    )
};


