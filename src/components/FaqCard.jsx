const FAQ_card = (props) => {
    return (
        <>
            <label htmlFor={'check' + props.id} for={'check' + props.id} className="faqCard h-max flex flex-col w-full px-5 pt-4 pb-2 ring-1 ring-slate-400 gap-2 shadow-md rounded-md">
                <input checked type="checkbox" id={'check' + props.id} className="checkBox hidden" />
                <div className="flex w-full justify-between items-center">
                    <p className="question font-bold max-w-[80%]">{props.quest}?</p>

                    <label htmlFor={'check' + props.id} className="text-3xl font-bold cursor-pointer h-8 w-8 min-h-[2rem] min-w-[2rem] flex items-center justify-center text-center rounded-full duration-200 text-purp">+</label>
                </div>


                <div className="answer text-xs">
                    {props.ans}.
                </div>
            </label>
        </>
    )
};

export default FAQ_card;