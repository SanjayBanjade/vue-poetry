import Poetry from '@/components/Poetry'
import PoetryLanding from '@/components/PoetryDetails/PoetryLanding'
import PoetryCard from '@/components/PoetryDetails/PoetryCard'
import PoetrySearch from '@/components/PoetryDetails/Search'

export const routes = [
    { path: '', component: Poetry, children: [
    	{ path: '', name: 'poetry', component: PoetryLanding },
    	{ path: 'poetry/:id', name: 'poetrycard', component: PoetryCard },
    	{ path: 'poem/search', name: 'poetrysearch', component: PoetrySearch },
    ]},
]