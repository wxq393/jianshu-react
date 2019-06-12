import styled from 'styled-components';
import logoPic from '../../statics/logo.png'
import appPic from '../../statics/app.png'

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  dispaly: block;
  width: 100px;
  height:58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 900px
  height: 100%
  padding-right: 80px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color:#969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavA = styled.a`
  float: right;
  dispaly: block;
  width: 59px;
  height:29px;
  margin: 16px 10px;
  background: url(${appPic});
  background-size: contain;
`;

export const SearchWrapper = styled.div`
  position: relative;
  float:left;
  .slide-enter {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .silde-exit-active {
    width: 160px;
  }
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height:30px;
    border-radius:15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;


export const NavSearch = styled.input.attrs({
   placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-left: 20px;
  box-sizing: border-box;
  margin-top: 9px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 220px;
  }
`;

export const SearchInfo = styled.div`
   position: absolute;
   left: 0;
   top: 58px;
   width: 240px;
   padding: 0 20px;
   box-shadow: 0 0 8px rgba(0, 0, 0, .2);
   border-radius: 6px;
   background: #fff;
`;

export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size: 14px;
   color: #969696;
`;

export const SearchInfoSwitch = styled.span`
   float: right;
   font-size:13px;
   cursor: pointer;
   .spin {
    display: block;
    float: left;
    font-size: 13px;
    margin-right: 5px;
    transition: all .3s ease-in;
    transform-origin: center center;
   }
`;

export const SearchInfoList =  styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
   display: block;
   float: left;
   line-height: 20px;
   padding: 0 5px;
   margin-right: 10px;
   margin-bottom: 15px;
   font-size:12px;
   border: 1px solid #ddd;
   color: #787878;
   border-radius: 3px;
`;

export const Addition = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;

