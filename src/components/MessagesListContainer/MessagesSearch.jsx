import combineColorOptions from '~lib/combineColorOptions'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SelectFieldUncontrolled from '~shared/FormElements/SelectFieldUncontrolled'
import SearchLoadingIndicator from './LoadingIndicatorContainers/SearchLoadingIndicator'

class MessagesSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {query: '', color: null, searchByQuery: false}

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleQueryChange({target: {value}}) {
    const {fetchMessagesRequest} = this.props
    const {color} = this.state
    this.setState({query: value, searchByQuery: true}, () => fetchMessagesRequest({q: value, color}))
  }

  handleColorChange({target: {value}}) {
    const {fetchMessagesRequest} = this.props
    const {query} = this.state
    this.setState({color: value || null, searchByQuery: false}, () => fetchMessagesRequest({q: query, color: value}))
  }

  render() {
    const {query, searchByQuery} = this.state
    const colorOptions = combineColorOptions(this.props.colorOptions, {value: '', name: 'All colors'})

    return (
      <div className='c7gtt9t'>
        <div className='c1w33pjg'>
          <label className='c1ug13ud' htmlFor='id-50854520'>Search</label>
          <div className='c6v0e9l'>
            <input type='search' className='cshm1e9' id='id-50854520' aria-controls='results' value={query} onChange={this.handleQueryChange} />
            <SearchLoadingIndicator searchByQuery={searchByQuery} />
          </div>
        </div>
        <div className='c1e30x2x'>
          <SelectFieldUncontrolled
            name='Filter'
            options={colorOptions}
            onChange={this.handleColorChange}
          />
        </div>
      </div>
    )
  }
}

MessagesSearch.propTypes = {
  colorOptions: PropTypes.arrayOf(PropTypes.shape({
    name:  PropTypes.string,
    value: PropTypes.string,
    id:    PropTypes.number
  })),
  fetchMessagesRequest: PropTypes.func.isRequired
}

export default MessagesSearch
