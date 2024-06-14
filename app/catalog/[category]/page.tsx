import { CardsList } from '@/app/component/CardList/CardList'
import { getClothesByCategory } from '@/app/data/data-utils';

export default function Catalog(props) {
    const clothesArray = getClothesByCategory(props.params.category);
    return(
        <main className="content">
            <CardsList id={props.params.category} data={clothesArray} />
        </main>
    )
}