import { ActionButtonsRow, Content, DraggableTopBar, RootLayout, SideBar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <SideBar className="p-2 bg-zinc-900/90">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </SideBar>
        <Content className="border-l bg-zinc-900/90 border-l-white/20">Cotent</Content>
      </RootLayout>
    </>
  )
}

export default App
