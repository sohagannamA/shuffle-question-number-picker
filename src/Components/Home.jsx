import { useState } from "react";
import AddQuestion from "./AddQuestionData";
import ShowNumber from "./ShowNumber";
import "./style.css";
export default function Home() {
    const [isClicked, setClick] = useState(false);
    const [dataset, setDataset] = useState("");
    const handleQuestion = () => {
        setClick(true);
    }
    const numberSet = (dataset) => {
        setDataset(dataset);
    }
    return (
        <div className="home_components">
            <div className="components_box">
                <div className="max_width">
                    {dataset.length>0 ? (
                        <ShowNumber dataset={dataset} setDataset={setDataset}/>
                    ) : (
                        isClicked ? (
                            <AddQuestion setClick={setClick} numberSet={numberSet} />
                        ) : (
                            <div className="box_container">
                                <div className="box_data_sec">
                                    <div className="box_title">Random Question Picker</div>
                                    <input
                                        type="button"
                                        className="primary"
                                        value="Add Question"
                                        onClick={handleQuestion}
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}