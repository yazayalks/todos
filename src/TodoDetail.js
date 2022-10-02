import {Navigate, useParams} from "react-router-dom";

export default function TodoDetail(props) {
    const {key} = useParams();
    const deed = props.getDeed(key);
    if (!props.currentUser)
        return <Navigate to="/login" replace />;
    else {
        return (
            <section>
                {deed.done && <p className="has-text-success">Выполнено</p>}
                <h1>{deed.title}</h1>
                <p>{deed.createAt}</p>
                {deed.desc && <p>{deed.desc}</p>}
                {deed.image && <p><img src={deed.image} alt="Иллюстрация"/></p>}
            </section>
        )
    }
}