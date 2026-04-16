export default function ButtonQuestion(questions, onOpen, modalOpen, trancada, solution) {
    const quesID = `dialog-${questions.id}`

    const baseIcon = questions.icon ?? "Question.png"
    const icon = trancada ? "Block.png" : solution ? "Check.png" : baseIcon
    const aria = trancada 
        ? `${questions.titulo} (bloqueada, resolva a anterior)`
        : solution
        ? `${questions.titulo} (resolvida)`
        : `${questions.titulo} (disponível)`

        return (
            <li className="icon-grid-item">
                <button 
                    type="button"
                    className={`icon-button ${trancada ?? "icon-button--locked"}
                    ${solution ?? "icon-button--solved"}`}
                    aria-haspopup="dialog"
                    aria-controls={quesID}
                    aria-label={aria}
                    aria-disabled={trancada || undefined}
                    onClick={() => onOpen(questions)}
                    disabled={trancada}>
                        <img className="icon-button-img" aria-hidden="true" src={icon} alt={`imagem de um ${icon}`} />
                        <span className="visually-hidden">{questions.titulo}</span>
                </button>
            </li>
        )
}