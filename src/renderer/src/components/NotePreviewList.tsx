import { useNotesList } from '@renderer/hooks/useNoteList'
import { notesMock } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (notes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notesMock.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          {...note}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
        />
      ))}
    </ul>
  )
}
