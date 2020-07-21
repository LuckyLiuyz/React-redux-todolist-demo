/**
 * @file 状态过滤 容器
 * @description 
 */

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter, // 根据当前选中的过滤条件，对其进行高亮展示
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink
