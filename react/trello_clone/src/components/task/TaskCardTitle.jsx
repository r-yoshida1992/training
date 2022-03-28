import React, {useState} from 'react'

export const TaskCardTitle = () => {
    // click状態を管理
    const [isClick, setIsClick] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState("Today")
    const handleClick = () => {
        setIsClick(true)
    }
    const handleChange = (e) => {
        setInputCardTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        // ページ更新を防ぐ
        e.preventDefault()
        setIsClick(false)
    }
    // 外れたところをクリックしたところの挙動
    const handleBlur = () => {
        setIsClick(false)
    }
    return (
        <div onClick={handleClick} className="taskCardTitleInputArea">
            {/*クリックしたらinputにする*/}
            {isClick
                ?
                <form onSubmit={handleSubmit}>
                    <input
                        className="taskCardTitleInput"
                        autoFocus
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={inputCardTitle}
                        maxLength={10}
                    />
                </form>
                :
                <h3>{inputCardTitle}</h3>}
        </div>
    )
}