$(function() {
  $.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/1.json", function(res) {
    $('#g11').append(res.player_1)
    $('#g12').append(res.player_2)
    $('#g13').click(function() {
      var BOARD=new tictactoe.Board()
      BOARD.loadfromApi()
    })
    $('#g14').click(function() {resetGame()})
  })
  $.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/2.json", function(res) {
    $('#g21').append(res.player_1)
    $('#g22').append(res.player_2)
    $('#g23').click(function() {})
    $('#g24').click(function() {resetGame()})
  })
  $.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/3.json", function(res) {
    $('#g31').append(res.player_1)
    $('#g32').append(res.player_2)
    $('#g33').click(function() {})
    $('#g34').click(function() {resetGame()})
  })
  $.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/4.json", function(res) {
    $('#g41').append(res.player_1)
    $('#g42').append(res.player_2)
    $('#g43').click(function() {
       var BOARD=new tictactoe.Board()
      BOARD.loadfromApi()
    })
    $('#g44').click(function() {
			window.location.reload();
			var game = new tictactoe.Game()
       game.turn_count=0
			var array = [].concat(...game.getBoard())
			console.log(game.getBoard())
			var obj = {
				tic_tac_toe_game: {
					data: {
						board: array
					}
				}
			}
			$.post("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/4.json", obj, function(res) {
				//console.log(res)
			})

		})

	
  })
  $.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json", function(res) {
    $('#g51').append(res.player_1)
    $('#g52').append(res.player_2)
    $('#g53').click(function() {})
    $('#g54').click(function() { resetGame()})

  })

})
