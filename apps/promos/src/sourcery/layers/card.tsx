import { useStage } from "../stage/context"
import { PandaCard } from "../stage/panda-card"

export function CardSegment() {
  const { frame, tall } = useStage()
  return <PandaCard frame={frame} tall={tall} />
}
