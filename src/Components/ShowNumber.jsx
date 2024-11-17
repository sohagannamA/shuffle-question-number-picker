import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export default function ShowNumber(props) {
    const { dataset, setDataset } = props;
    const [isShowData, setShowData] = useState(false);
    const [data, setData] = useState(shuffleArray(dataset));
    const [selectedData, setSelectedData] = useState(null);
    const [isFinished, setFinish] = useState(false);


    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const handleClick = () => {
        if (data.length === 0) {
            setFinish(true);
            return;
        }

        setShowData(true);
        if (data.length === 1) {
            const lastData = data[0];
            setSelectedData(lastData);
            setData([]);
            return;
        }


        const randomIndex = Math.floor(Math.random() * data.length);
        const nextData = data[randomIndex];

        const updatedData = data.filter((_, index) => index !== randomIndex);
        setData(updatedData);
        setSelectedData(nextData);
    };
    const handleClose = () => {
        setDataset('');
    };


    const handleBack = () => {
        setDataset('');
    };

    return (
        <div>
            {isFinished ? (
                <div className="box_data_sec">
                    <div className="congratulation_section">
                        <h3 className="conmessage">
                            🎉 Fantastic effort! You've successfully finished all the questions!
                        </h3>
                        <input
                            type="button"
                            className="back_btn"
                            value="Back"
                            onClick={handleBack}
                        />
                    </div>
                </div>
            ) : (
                <div className="box_data_sec display_each_number">
                    <div className="display_data_box">
                        <div className="question_data_title">
                            <div className="add_question">
                                Total Questions: <span className="total_number">{data.length}</span>
                            </div>
                            <div className="close_icon_box" onClick={handleClose}>
                                <MdOutlineClose className="close_icon" />
                            </div>
                        </div>
                        <div className="display_number">
                            {isShowData ? (
                                <div className="question_number_display">
                                    <a
                                        href={selectedData?.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Question no: {selectedData?.number}
                                    </a>
                                </div>
                            ) : (
                                <div className="display_print_message">
                                    <h3 className="System_message">
                                        Click the button to pick a random question.
                                    </h3>
                                </div>
                            )}
                        </div>
                        <div className="show_number_button_section">
                            <input
                                type="button"
                                className="pick_btn"
                                value={data.length === 0 ? "Finished" : "Pick Question"}
                                onClick={() => {
                                    if (data.length === 0) {
                                        setFinish(true);
                                    } else {
                                        handleClick();
                                    }
                                }}
                                disabled={isFinished}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
