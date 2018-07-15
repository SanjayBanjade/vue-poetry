import Poetry from '@/components/Poetry'
import PoetryLanding from '@/components/PoetryDetails/PoetryLanding'
import PoetryCard from '@/components/PoetryDetails/PoetryCard'
import PoetrySearchDetails from '@/components/PoetryDetails/PoetrySearchDetails'

export const routes = [
    { path: '', component: Poetry, children: [
    	{ path: '', name: 'poetry', component: PoetryLanding },
    	{ path: 'poetry/:id', name: 'poetrycard', component: PoetryCard },
    	{ path: 'poem/search', name: 'poetrysearchdetails', component: PoetrySearchDetails },
    ]},
]