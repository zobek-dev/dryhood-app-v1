import { LegacyCard, EmptyState } from '@shopify/polaris'

interface Props {
  heading: string
  textAction: string
  onAction: () => void
  content: string
}

export function Empty({ heading, textAction, onAction, content }: Props) {
  return (
    <LegacyCard sectioned>
      <EmptyState
        heading={heading ?? ''}
        action={{ content: textAction, onAction }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        fullWidth>
        <p>{content}</p>
      </EmptyState>
    </LegacyCard>
  )
}
