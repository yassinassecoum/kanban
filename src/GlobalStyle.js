import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`:root {
	--backgroundGrey: rgba(0, 0, 0, 0.5);
	--backgroundPurple: #20212c;
	--dark-purple: #635fc7;
	--dark-grey: #2b2c37;
	--light-grey: #828fa3;
}
* {
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
	font-family: "Plus Jakarta Sans", sans-serif;
}
body,
.board,
#root {
	min-height: 100vh;
}
button,
input,
select,
textarea {
	cursor: pointer;
	color: inherit;
	background-color: inherit;
	transition: 0.3s;
}
select:focus,
input:focus,
textarea:focus {
	outline: 1px solid var(--dark-purple);
}
.none {
	display: none;
}
.bgGrey {
	background-color: var(--backgroundGrey);
}
.scroll-none {
	overflow: hidden;
}
*::-webkit-scrollbar {
	display: none;
}
* {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
/* Typography */
.title-XL {
	font-weight: bold;
	font-size: 24px;
	line-height: 30px;
}
.title-L {
	font-weight: bold;
	font-size: 18px;
	line-height: 23px;
}
.title-M {
	font-weight: bold;
	font-size: 15px;
	line-height: 19px;
}
.title-S {
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2.4px;
}
.text-L {
	font-weight: 500;
	font-size: 13px;
	line-height: 23px;
}
.text-M {
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
}
.light {
	color: #000112;
}
.dark {
	color: white;
	.board {
		background: var(--backgroundPurple);
	}
	.add-column-btn {
		background-color: white;
		color: var(--dark-purple);
	}
	.modal {
		background: var(--dark-grey);
	}
	label {
		color: white;
	}
	input::placeholder,
	textarea::placeholder {
		color: white;
	}
	.task {
		background: var(--dark-grey);
	}
	.add-column-column {
		background: linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%);
	}
	.delete-modal {
		background: var(--dark-grey);
	}
	.task-modal {
		background: var(--dark-grey);
	}
	.cancel-btn {
		background-color: white;
	}
	.elipsis-menu {
		background: var(--backgroundPurple);
	}
	.subtask {
		background: var(--backgroundPurple);
	}
	.status-options {
		background: var(--backgroundPurple);
	}
	header {
		background: var(--dark-grey);
	}
	.dropdown-modal {
		background: var(--dark-grey);
	}
	.dropdown-board:hover {
		background: white;
		color: var(--dark-purple);
	}
	.theme-toggle {
		background: var(--backgroundPurple);
	}
	.toggle-sidebar-container:hover {
		background: white;
		color: var(--dark-purple);
	}
	.sidebar {
		background: var(--dark-grey);
	}
	.sidebar-closed .toggle-sidebar-container:hover {
		background: transparent;
	}

}
/* Board */
.board {
	background-color: #f4f7fd;
	display: flex;
	overflow-x: scroll;
	gap: 24px;
	padding: 24px 16px;
	padding-top: 88px;

	@media only screen and (min-width: 768px) {
		padding: 24px;
		padding-top: 104px;
	}
}
.open-sidebar {
	margin-left: 261px;
}
.create-btn,
.add-column-btn {
	font-weight: 700;
	font-size: 15px;
	color: white;
	background-color: var(--dark-purple);
	border-radius: 24px;
	padding: 15px 18px;
	margin-top: 24px;
}
.create-btn:hover,
.add-column-btn:hover {
	background-color: #a8a4ff;
}
.add-column-btn {
	margin: 0;
}
/* Board Modal */
.modal {
	background-color: white;
	padding: 24px;
	border-radius: 6px;
	overflow-y: scroll;
	max-height: 90%;
	width: 343px;
	@media only screen and (min-width: 768px) {
		padding: 32px;
		width: 480px;
	}
	button {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
	}
	h3 {
		margin-bottom: 24px;
	}
	.btn-light {
		color: var(--dark-purple);
		background: rgba(99, 95, 199, 0.1);
	}
	label {
		display: block;
		margin-bottom: 8px;
		font-weight: 700;
		font-size: 12px;
		line-height: 15px;
		color: var(--light-grey);
	}
	input,
	textarea {
		height: 40px;
		width: 100%;
		padding: 8px 16px;
		border: 1px solid rgba(130, 143, 163, 0.25);
		border-radius: 4px;
		font-weight: 500;
		font-size: 13px;
	}
}
.modal-container {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
}
.modal-column {
	margin-bottom: 12px;
	display: flex;
	align-items: center;
	gap: 16px;
	img {
		cursor: pointer;
	}
}
textarea {
	height: 135px;
	margin-bottom: 24px;
}
#board-name-input,
#task-name-input {
	margin-bottom: 24px;
	width: 100%;
}
input::placeholder,
textarea::placeholder {
	opacity: 0.25;
}
.input-container {
	width: 100%;
	position: relative;
}
.noEmpty {
	position: absolute;
	color: #ea5555;
	top: 8px;
	right: 16px;
	width: fit-content;
	white-space: nowrap;
}
.red-border {
	border-color: #ea5555 !important;
}
/* Column & Task */
.column {
	min-width: 280px;
	.col-name {
		color: var(--light-grey);
		margin-bottom: 24px;
	}
}
.add-column-column {
	background: linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%);
	color: var(--light-grey);
	border-radius: 6px;
	min-width: 280px;
	margin-top: 39px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		color: var(--dark-purple);
		transition: 0.3s;
	}
}
.task {
	width: 280px;
	padding: 23px 16px;
	background-color: white;
	box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
	border-radius: 8px;
	margin-bottom: 20px;
	&:hover {
		cursor: pointer;
		color: var(--dark-purple);
	}
	.num-of-subtasks {
		color: var(--light-grey);
		margin-top: 8px;
	}
}
/* Task Modals */
.task-modal,
.delete-modal {
	background-color: white;
	padding: 24px;
	border-radius: 6px;
	max-height: 90%;
	width: 343px;
	@media only screen and (min-width: 768px) {
		padding: 32px;
		width: 480px;
	}
	h3 {
		color: #ea5555;
	}
	p {
		color: var(--light-grey);
		margin: 24px 0;
	}
}
.delete-modal-btns {
	@media only screen and (min-width: 768px) {
		display: flex;
		gap: 16px;
	}
}
.btn {
	width: 100%;
	border-radius: 20px;
	padding: 8px;
	height: 40px;
	font-size: 13px;
	font-weight: 700;
	line-height: 23px;
}
.delete-btn {
	background-color: #ea5555;
	color: white;
	margin-bottom: 16px;
	&:hover {
		background: #ff9898;
	}
}
.cancel-btn {
	background-color: rgba(99, 95, 199, 0.1);
	color: var(--dark-purple);

	&:hover {
		background: rgba(99, 95, 199, 0.25);
	}
}
.taskTitle-container {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	margin-bottom: 24px;
}
.task-elipsis {
	cursor: pointer;
}
.task-description {
	color: var(--light-grey);
	margin-bottom: 24px;
}
.subtasks-completed {
	color: var(--light-grey);
	margin-bottom: 16px;
}
.subtask {
	background: #f4f7fd;
	border-radius: 4px;
	margin-top: 8px;
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 13px 12px;
	&:hover {
		background: rgba(99, 95, 199, 0.25);
	}
}
.subtask-checkbox {
	min-width: 16px;
	min-height: 16px;
}
.checked {
	text-decoration: line-through;
	opacity: 0.5;
}
.select-column-container {
	margin-top: 24px;
}
.select-status {
	margin-top: 10px;
	width: 100%;
	padding: 8px 16px;
	border: 1px solid #828fa340;
	border-radius: 4px;
	appearance: none;
	background-image: url("../assets/icon-chevron-down.svg");
	background-repeat: no-repeat;
	background-position: right 16px top 50%;
}
.status-options {
	color: var(--light-grey);
}
.elipsis-menu {
	position: absolute;
	right: -10%;
	top: 150%;
	padding: 16px;
	width: 40%;
	background-color: white;
	color: var(--light-grey);
	box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
	border-radius: 8px;
	p {
		cursor: pointer;
	}
}
/* Header */
.header-container {
	position: fixed;
	right: 0;
	left: 0;
	z-index: 1;
}
header {
	display: flex;
	padding: 16px;
	align-items: center;
	background-color: white;
	position: relative;
    .elipsis-menu {
	top: 90%;
	right: 2%;
	width: 150px;
}
}
.navbar {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-right: auto;
	margin-left: 16px;
    img{
        cursor: pointer;
    }
}
.addBtn {
	margin-right: 16px;
	background: var(--dark-purple);
	color: white;
	border-radius: 24px;
	padding: 10px 18px;
	display: flex;
	align-items: center;
	justify-content: center;
    &:hover{
        background: #a8a4ff;
    }
}
.btn-off {
	opacity: 25%;
	cursor: initial;
}
.elipsis {
	height: 16px;
	cursor: pointer;
}
/* dropdown modal */
.dropdown-container {
	position: absolute;
	top: 64px;
	bottom: -100vh;
	left: 0;
	right: 0;
	background-color: var(--backgroundGrey);
	padding: 24px 55px;
}
.dropdown-modal {
	width: 100%;
	background-color: white;
	box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
	border-radius: 8px;
	padding: 16px 0;
	color: var(--light-grey);
    h3{
        font-size: 12px;
	    line-height: 15px;
	    letter-spacing: 2.4px;
	    margin: 0 0 24px 19px;
    }
}
.dropdown-board {
	padding: 15px 24px;
	font-weight: 700;
	font-size: 15px;
	margin-right: 24px;
	cursor: pointer;
	transition: 0.3s;
    &:hover{
        background: rgba(99, 95, 199, 0.1);
	    color: var(--dark-purple);
	    border-radius: 0px 100px 100px 0px;
    }
    img{
        margin-right: 12px;
    }
}
.board-active {
	background-color: var(--dark-purple);
	border-radius: 0px 100px 100px 0px;
	color: white;
}
.dropdown-create-board-btn {
	color: var(--dark-purple);
	fill: var(--dark-purple);
}
.filter-purple {
	filter: invert(39%) sepia(47%) saturate(748%) hue-rotate(203deg) brightness(94%) contrast(93%);
}

.filter-white {
	filter: invert(100%) sepia(96%) saturate(16%) hue-rotate(350deg) brightness(104%) contrast(100%);
}
.theme-toggle {
	padding: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	margin: 16px 16px 0 16px;
	background: #f4f7fd;
	border-radius: 6px;
}
.switch {
	position: relative;
	display: inline-block;
	width: 40px;
	height: 20px;
	margin: 0;
    input{
        opacity: 0;
	width: 0;
	height: 0;
    }
}
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--dark-purple);
	-webkit-transition: 0.4s;
	transition: 0.4s;
    &:hover{
        background: #a8a4ff;
    }
}
.slider:before {
	position: absolute;
	content: "";
	height: 14px;
	width: 14px;
	left: 3px;
	bottom: 3px;
	background-color: white;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}
input:focus+.slider {
	box-shadow: 0 0 1px #ccc;
}
input:checked+.slider:before {
	-webkit-transform: translateX(20px);
	-ms-transform: translateX(20px);
	transform: translateX(20px);
}
.slider.round {
	border-radius: 34px;
}
.slider.round:before {
	border-radius: 50%;
}
@media only screen and (min-width: 768px) {
	.logo-container {
		display: flex;
		align-items: center;
		gap: 15px;
		width: calc(261px - 16px);
		padding-left: 10px;
	}
	.brand {
		font-weight: bold;
		font-size: 32px;
	}
	.navbar {
		margin-left: 24px;
	}
	.dropdown-container {
		position: initial;
		padding: 0;
		height: 90%;
		background-color: white;
	}
	.dark .dropdown-container {
		background: var(--dark-grey);
	}
	.dropdown-modal {
		box-shadow: none;
		border-radius: 0;
		padding: 0;
		height: 100%;
		position: relative;
	}
	.theme-toggle {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin-bottom: 0;
	}
	.addBtn {
		width: 164px;
		height: 48px;
		margin-right: 24px;
	}
	.elipsis {
		height: 20px;
		width: 5px;
	}
}
.sidebar {
	min-width: 261px;
	background-color: white;
	padding-top: calc(54px - 16px);
	position: fixed;
	top: 72px;
	bottom: 0;
	left: 0;
}
.sidebar-infront {
	z-index: 5;
}
.toggle-sidebar-container {
	display: flex;
	margin: 8px 24px 32px 0;
	gap: 10px;
	color: var(--light-grey);
	cursor: pointer;
	padding: 15px 30px;
	transition: 0.3s;
	border-radius: 0px 100px 100px 0px;
    &:hover{
        background: rgba(99, 95, 199, 0.1);
	    color: var(--dark-purple);
    }
}
.sidebar-closed {
	background: var(--dark-purple);
	width: 56px;
	height: 48px;
	border-radius: 0px 100px 100px 0px;
	bottom: 32px;
	top: auto;
	padding: 0;
	min-width: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
    &:hover{
        background: #A8A4FF;
	    cursor: pointer;
    }
    .toggle-sidebar-container {
	    background: transparent;
    }
}
.toggle-closed {
	margin: 0;
}
`;
export default GlobalStyle;
