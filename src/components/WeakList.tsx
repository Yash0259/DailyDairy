export type WeakListItem = {
  id: string
  weakness: string
  futureHabit: string
  note: string
  createdAt: string
}

type WeakListProps = {
  items: WeakListItem[]
  onDeleteItem: (itemId: string) => void
}

export default function WeakList({ items, onDeleteItem }: WeakListProps) {
  return (
    <section className="weak-list-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Future habits</p>
          <h3>Weak List</h3>
          <p className="muted">Keep the things you want to improve later, separate from today&apos;s tracker.</p>
        </div>
        <p className="muted">{items.length} queued</p>
      </div>

      <div className="weak-list-items">
        {items.map((item) => (
          <article key={item.id} className="weak-list-card">
            <div className="weak-list-card-top">
              <div>
                <p className="weak-list-label">Weakness</p>
                <h4>{item.weakness}</h4>
              </div>
              <button
                type="button"
                className="delete-button"
                onClick={() => onDeleteItem(item.id)}
                aria-label={`Remove ${item.weakness}`}
              >
                ×
              </button>
            </div>

            <p className="weak-list-future">
              <span>Future habit</span>
              {item.futureHabit}
            </p>

            {item.note ? <p className="weak-list-note">{item.note}</p> : null}
          </article>
        ))}

        {items.length === 0 ? (
          <div className="weak-list-empty">
            <p>No future habits yet.</p>
            <span>Add one weakness you want to work on later.</span>
          </div>
        ) : null}
      </div>
    </section>
  )
}
