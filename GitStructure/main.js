import { createGitgraph } from './node_modules/@gitgraph'

const graphContainer = document.getElementById('gitgraph')
const gitgraph = createGitgraph(graphContainer)

const master = gitgraph.branch('master')
master.commit('Initial commit')

master.commit('Add 1').commit('Tests').commit('Feature')
