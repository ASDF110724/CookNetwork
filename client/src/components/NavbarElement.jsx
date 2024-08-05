/* NavbarElement.jsx 
수평 네비게이션바
네비게이션바는 react-router-dom 라이브러리 사용 (npm install react-router-dom)
*/

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';


function NavbarElement({ user }) {
  return (
    <div>
      {/* 상단오른쪽 공지사항, 회원가입, 로그인 링크도 네비바로 작성 */}
      <Nav className="justify-content-end" defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">공지사항</Nav.Link>
        </Nav.Item>
        {
          <>
          {
            user ? (
                <>
                  <Nav.Item as="li">
                    <Nav.Link href="/mypage">마이페이지</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="/logout">로그아웃</Nav.Link>
                  </Nav.Item>
                </>
            ) : (
                <>
                  <Nav.Item as="li">
                    <Nav.Link href="/signup">회원가입</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="/login">로그인</Nav.Link>
                  </Nav.Item>
                </>
            )
          }
          </>
      }
      </Nav>

      {/* 헤더 아래 네비바 */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-between align-items-center flex-nowrap ">
          <Nav className="mx-auto d-flex justify-content-center flex-grow-1 flex-shrink-0" style={{ overflow: 'visible' }}>
            <Navbar.Brand href="/" bg="light" data-bs-theme="light" className="flex-shrink-0">전체</Navbar.Brand>
            <Nav.Link href="/korean" className="px-2">한식</Nav.Link>
            <Nav.Link href="/western" className="px-2">양식</Nav.Link>
            <Nav.Link href="/chinese" className="px-2">중식</Nav.Link>
            <Nav.Link href="/japanese" className="px-2">일식</Nav.Link>
          </Nav>
          <SearchBar />
        </Container>
      </Navbar>

    </div>
  )
}

export default NavbarElement;