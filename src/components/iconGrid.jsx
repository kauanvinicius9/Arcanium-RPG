import ButtonQuestion from "./buttonQuestion";

export default function IconGrid({questions, onOpen, modalOpen, trancada, resolvidas}) {
    return (
        <section className="icon-grid-container" aria-hidden={modalOpen
                       || undefined}
                       inert={modalOpen? "" : undefined}>

            <ul className="icon-grid">
                {questions.map((q, idx) => {
                    const locked = idx > trancada;
                    const solution = resolvidas.has(q.id);

                    return (
                        <ButtonQuestion
                            key={q.id}
                            questions={q}
                            onOpen={onOpen}
                            trancada={trancada}
                            solution={solution}
                        />
                    )
                })}
            </ul>
        </section>
    );
}