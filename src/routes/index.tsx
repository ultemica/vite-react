import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Index
})

/**
 * NOTE: Next.jsでいうところのsrc/app/page.tsx
 */
function Index() {
  return (
    <div className='p-2'>
      <Button>Shadcn</Button>
      <h3>Welcome Home!</h3>
    </div>
  )
}
