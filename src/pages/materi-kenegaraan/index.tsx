import Layout from '../../components/MainLayout'
import SeoText from '../../components/SeoText'
import CardList from '../../components/Card/List'
import DataDaftarIsi, { ContentItem } from '../../data/daftar-isi'

import { ReportCoreWebVitalsParams, reportCoreWebVitals } from '../../utils/index'

import MetaHead from '../../components/MetaHead'
import { BASE_PATH } from '../../constants'

const title = `Materi Kenegaraan`
const desc = `Kumpulan informasi dasar kenegaraan untuk para anggota pramuka: pancasila, UUD 1945, proklamasi dan lainnya`
const url = BASE_PATH + '/materi-kenegaraan'

function MateriKenegaraanPage() {
  const FilteredData: ContentItem | undefined = DataDaftarIsi.find(
    (bab) => bab.href === '/materi-kenegaraan/'
  )

  return (
    <Layout>
      <>
        <MetaHead title={title} desc={desc} url={url} />
        <div className="text-center">
          <h1 className="mt-8 text-3xl font-bold md:text-4xl">{FilteredData?.text}</h1>
        </div>
        <div className="text-left">
          <ul>
            {FilteredData?.children?.map((babChild) => (
              <li className="mb-2" key={babChild.href}>
                <CardList title={babChild.text} href={babChild.href} />
              </li>
            ))}
          </ul>
        </div>
        <SeoText text={desc} />
      </>
    </Layout>
  )
}

export function reportWebVitals(param: ReportCoreWebVitalsParams) {
  reportCoreWebVitals(param)
}

export default MateriKenegaraanPage
