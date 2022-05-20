export default function Play(props){
    return(
        <div className="play" >
            <div className="content">
            <h1>Quiz</h1>
            {
                props.questions.map((data)=>(
                    <div className="QandA">
                        <div className="questions">{data.question}</div>
                        <div className="options">
                            { 
                                data.options.map((option)=>{
                                    const btnClick=(evt,option,data)=>{
                                        if(evt.target.style["background"] !== "yellow")
                                            evt.target.style["background"]= "yellow"
                                        else
                                            evt.target.style["background"]= "#dfdfdf"
                                        console.log(evt)
                                        props.getAnswer(evt,option,data)
                                    }
                                    return(<div className="option"  onClick={(evt)=>btnClick(evt,option,data)}>{option}</div>)
                                    
                                })
                            }
                        </div>
                    </div>
                ))
            }
            <button onClick={()=>props.onPlay("block")}>Submit answer</button>
            </div>
        </div>
    );
}