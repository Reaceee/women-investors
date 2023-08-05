const FAQ_card = (props) => {
    return (
        <>
            <div className="faqCard h-max flex flex-col w-full px-5 pt-4 pb-2 ring-1 ring-slate-400 gap-2 shadow-md rounded-md">
                <input type="checkbox" id={'check' + props.id} className="hidden invisible" />
                <div className="flex w-full justify-between items-center">
                    <p className="question font-bold max-w-[80%]">{props.quest}?</p>

                    <label for={'check' + props.id} className="text-3xl font-bold cursor-pointer h-8 w-8 min-h-[2rem] min-w-[2rem] hover:bg-purple-200 flex items-center justify-center text-center pb-2 rounded-full duration-200 text-purp">+</label>
                </div>


                <div className="answer text-xs">
                    {props.ans}.
                    
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa. Ipsam unde nisi eos aperiam tempore eveniet aliquid quam esse consequuntur doloribus delectus, reiciendis odit perferendis quidem ipsum assumenda odio. */}
                </div>
            </div>
        </>
    )
};

export default FAQ_card;