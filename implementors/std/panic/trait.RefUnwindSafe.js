(function() {var implementors = {};
implementors["aper"] = [{"text":"impl&lt;Transition&gt; RefUnwindSafe for SuspendedEvent&lt;Transition&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transition: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Transition&gt; RefUnwindSafe for TransitionEvent&lt;Transition&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transition: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PlayerID","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; RefUnwindSafe for StateUpdateMessage&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["aper_actix"] = [{"text":"impl&lt;State&gt; !RefUnwindSafe for ChannelActor&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; RefUnwindSafe for WrappedStateUpdateMessage&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; !RefUnwindSafe for PlayerActor&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateChannelMessage","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; RefUnwindSafe for GetChannelMessage&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; !RefUnwindSafe for ServerActor&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; !RefUnwindSafe for ChannelMessage&lt;State&gt;","synthetic":true,"types":[]}];
implementors["aper_yew"] = [{"text":"impl !RefUnwindSafe for UpdateInterval","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; RefUnwindSafe for StateManager&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;View&gt; !RefUnwindSafe for Props&lt;View&gt;","synthetic":true,"types":[]},{"text":"impl&lt;View&gt; !RefUnwindSafe for StateMachineComponent&lt;View&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for WireWrapped&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; !RefUnwindSafe for ViewContext&lt;State&gt;","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; RefUnwindSafe for Status&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;State&gt; RefUnwindSafe for Msg&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;State as StateMachine&gt;::Transition: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()