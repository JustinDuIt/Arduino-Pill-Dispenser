import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CodeModalProps {
  isOpen: boolean
  onClose: () => void
  code: string
}

export default function CodeModal({ isOpen, onClose, code }: CodeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Arduino Code</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full">
          <pre className="p-4 bg-gray-100 rounded-md overflow-x-auto">
            <code>{code}</code>
          </pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

