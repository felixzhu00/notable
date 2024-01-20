import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  NotePreviewList,
  RootLayout,
  SideBar
} from '@/components'
import { MarkdownEditor } from './components/MarkdownEditor'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <SideBar className="p-2 bg-zinc-900/90">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </SideBar>
        <Content className="border-l bg-zinc-900/90 border-l-white/20">
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
