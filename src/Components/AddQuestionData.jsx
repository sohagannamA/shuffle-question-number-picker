import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
export default function AddQuestion(props) {
    const { setClick, numberSet } = props;

    const [dataSet, setDataSet] = useState([]);

    const [questionNumber, setQuestionNumber] = useState();
    const [questionLink, setQuestionLink] = useState("");

    const handleClose = () => {
        setClick(false);
        numberSet(dataSet)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isDuplicate = dataSet.some((item) => item.number === Number(questionNumber));
        if (isDuplicate) {
            alert("This question already added");
            setQuestionNumber("");
            setQuestionLink("");
            return;
        }

        setDataSet([...dataSet, { number: Number(questionNumber), link: questionLink }]);
        setQuestionNumber("");
        setQuestionLink("");
    }
    return (
        <div className="box_data_sec add_question_box">
            <div className="question_data_title">
                <div className="add_question">Add Question <span className="total_numer">{dataSet.length!=0?dataSet.length:""}</span></div>
                <div className="close_icon_box" onClick={handleClose}>
                    <MdOutlineClose className="close_icon" />
                </div>
            </div>
            <div className="add_data_user_from">
                <form onSubmit={handleSubmit}>
                    <div className="user_input">
                        <div className="each_user_inp">
                            <input
                                type="number"
                                placeholder="Question Number"
                                className="user_input_field"
                                min="0"
                                max="4000"
                                onChange={(e) => setQuestionNumber(e.target.value)}
                                value={questionNumber}
                                required
                            />
                        </div>
                        <div className="each_user_inp">
                            <input
                                type="url"
                                placeholder="https://example.com"
                                className="user_input_field"
                                onChange={(e) => setQuestionLink(e.target.value)}
                                value={questionLink}
                                required
                            />
                        </div>
                        <div className="each_user_inp">
                            <input
                                type="submit"
                                className="submit_btn"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}