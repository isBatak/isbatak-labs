import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { useMasonry } from "./use-masonry"
import {} from "solid-js"

const styles = masonryRecipe()

export interface ImagesProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function Images(props: ImagesProps) {
  const api = useMasonry(() => props)

  return (
    <main class={classes.story}>
      <div {...api().getRootProps()} class={styles.root}>
        <div {...api().getItemProps({ value: "1" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/330px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/330px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
            alt="The Birth of Venus"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "2" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg"
            alt="Woman with a Parasol"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "3" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg/330px-La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg/330px-La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg"
            alt="The Bedroom"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "4" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg/330px-Vincent_van_Gogh_-_Irises_%281889%29.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg/330px-Vincent_van_Gogh_-_Irises_%281889%29.jpg"
            alt="Irises"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "5" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/330px-1665_Girl_with_a_Pearl_Earring.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/330px-1665_Girl_with_a_Pearl_Earring.jpg"
            alt="Girl with a Pearl Earring"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "6" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/330px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/330px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg"
            alt="Luncheon of the Boating Party"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "7" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/330px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/330px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"
            alt="The Kiss"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "8" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/330px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/330px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg"
            alt="A Sunday on La Grande Jatte"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "9" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/330px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/330px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg"
            alt="The Night Watch"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "10" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/330px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/330px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg"
            alt="The Milkmaid"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "11" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG/330px-Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG/330px-Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG"
            alt="Café Terrace at Night"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "12" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/330px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/330px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
            alt="Starry Night Over the Rhône"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "13" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/330px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/330px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg"
            alt="Sunflowers"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "14" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Vincent_van_Gogh_-_Almond_Blossom_-_VGM_F671.jpg/330px-Vincent_van_Gogh_-_Almond_Blossom_-_VGM_F671.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Vincent_van_Gogh_-_Almond_Blossom_-_VGM_F671.jpg/330px-Vincent_van_Gogh_-_Almond_Blossom_-_VGM_F671.jpg"
            alt="Almond Blossom"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "15" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/330px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/330px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg"
            alt="The Fighting Temeraire"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "16" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/330px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/330px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg"
            alt="The Magpie"
            loading="lazy"
            class={classes.image}
          />
        </div>
        <div {...api().getItemProps({ value: "17" })} class={styles.item}>
          <img
            srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg 2x"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg"
            alt="Poppy Field"
            loading="lazy"
            class={classes.image}
          />
        </div>
      </div>
      <output data-testid="layout">{formatLayout(api().columns)}</output>
    </main>
  )
}
