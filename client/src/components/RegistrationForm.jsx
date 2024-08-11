import React from 'react'
import './RegistrationForm.css'
<div class="container">
		<div className="tabs">
			<ul>
				<li id="register"><a>Register</a></li>
				<li id="login"><a>Login</a></li>
				<li id="reset"><a>Reset</a></li>
			</ul>
		</div>
		<div className="forms">
			<div className="register">
				<p>Sign up free with in seconds.</p>
				
				<form method="post" name="register" action="sign up.jsp">						 
					<input class="field" name="uname" required type="text" placeholder="Username" /> 
					<input class="field" name="email" required type="email" placeholder="myusername@domain.com" /> 
					<input id="p1" class="field" name="pass" required type="password" placeholder="Password" onchange="form1.p2.pattern=this.value;" />
					<input id="p2" class="field" name="pass_confirm" required type="password" placeholder="Rewrite Password" required />
					<input type="submit" onclick="check pass()" value="Sign Up" />
				</form>
			</div>
			
			<div className="login">
				<p>SignIn in your account.</p>
				
				<form method="post" name="register" action="login.jsp">
					<input class="field" name="email" required type="email" placeholder="* myusername@domain.com" />
					<input class="field" name="pass" required type="password" name="pass" placeholder="* Password" />
					<input type="checkbox" name="terms"> <em>Keep me logged in </em> <input type="submit" value="Login" />
				</form>
			</div>
			
			<div className="reset">
				<p>Reset Your Password.</p>
				
				<form method="post" name="register" action="reset.jsp">			 
					<input class="field" name="email" type="email" placeholder="*myusername@domain.com" required />
					<input class="field" name="pass_old" type="password" placeholder="*Old Password" required/>
					<input class="field" name="pass_new" type="password" placeholder="*New Password" required/>
					<div class="btn">
						<input type="submit" value="Get New One !" />
							</div>
						</form>
			</div>
		</div>
	</div>

// function RegistrationForm() {
//   return (
//     <div>RegistrationForm</div>
//   )
// }

// export default RegistrationForm