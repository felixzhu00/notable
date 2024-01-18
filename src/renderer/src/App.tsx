import { Content, DraggableTopBar, RootLayout, SideBar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <SideBar className="p-2">SideBar</SideBar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Cotent</Content>
      </RootLayout>
    </>
  )
}

export default App
