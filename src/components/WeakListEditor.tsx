import { useState, type FormEvent } from 'react'

import type { WeakListItem } from './WeakList'

type WeakListEditorProps = {
  onAddItem: (item: Omit<WeakListItem, 'id' | 'createdAt'>) => void
}

function getDefaultFormState() {
  return {
    weakness: '',
    futureHabit: '',
    note: '',
  }
}

export default function WeakListEditor({ onAddItem }: WeakListEditorProps) {
  const [form, setForm] = useState(getDefaultFormState)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const weakness = form.weakness.trim()
    const futureHabit = form.futureHabit.trim()
    const note = form.note.trim()

    if (!weakness || !futureHabit) {
      return
    }

    onAddItem({
      weakness,
      futureHabit,
      note,
    })

    setForm(getDefaultFormState())
  }

  return (
    <section className="weak-list-editor-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Future habits</p>
          <h3>Weak List setup</h3>
          <p className="muted">Build the future list here. The saved items stay in the right rail.</p>
        </div>
      </div>

      <form className="weak-list-form" onSubmit={handleSubmit}>
        <label>
          <span>Weakness</span>
          <input
            value={form.weakness}
            onChange={(event) => setForm((current) => ({ ...current, weakness: event.target.value }))}
            placeholder="Example: Procrastination"
          />
        </label>

        <label>
          <span>Future habit</span>
          <input
            value={form.futureHabit}
            onChange={(event) => setForm((current) => ({ ...current, futureHabit: event.target.value }))}
            placeholder="Example: Start with 15 minutes of focused work"
          />
        </label>

        <label>
          <span>Why it matters</span>
          <textarea
            value={form.note}
            onChange={(event) => setForm((current) => ({ ...current, note: event.target.value }))}
            placeholder="Short reminder for later."
          />
        </label>

        <button type="submit" className="primary-button">
          Add to Weak List
        </button>
      </form>
    </section>
  )
}
