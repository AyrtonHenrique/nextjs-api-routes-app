import useSWR from 'swr'
import Cars from '../../components/cars/GridCarros'
import styles from '../../styles.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function handler(req, res) {
    const { data, error } = useSWR('/api/cars', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div >
            <div className={styles.titleContainer}>
                <h2>Veiculos disponiveis</h2>
            </div>
            <div className={styles.containerCarsIndex}>

                {data.map((p, i) => (
                    <Cars key={i} cars={p} />
                ))}

            </div>
        </div>
    )
}