const FAQ_card = (props) => {
    return (
        <>
            <div className="faqCard h-max flex flex-col w-full px-5 pt-4 pb-2 ring-1 ring-slate-400 gap-2 shadow-md rounded-md">
                <input checked type="checkbox" id={'check' + props.id} className="checkBox hidden" />
                <div className="flex w-full justify-between items-center">
                    <p className="question font-bold max-w-[80%]">{props.quest}?</p>
                </div>


                <div className="answer text-xs">
                    {props.ans}.
                </div>
            </div>
        </>
    )
};

export default FAQ_card;