import './main.css'
import Form from "./form/Form";
import DisplayGrid from "./displaygrid/DisplayGrid";
import {data} from "../data";

export default function Main() {
    return (
        <main>
            <Form />
            <DisplayGrid tasks={data}/>
        </main>
    )
}