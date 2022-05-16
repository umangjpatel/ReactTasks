import './form.css'

export default function Form() {
    return (
        <form className="entry-form">
            <input type="text" size="40" placeholder="What's on your mind today ?" required={true}/>
            <button>Add</button>
        </form>
    )

}