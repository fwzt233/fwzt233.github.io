var ls;
(function (ls) {
	ls.Title = function() {
		return {
			"%22GamePlay%22": function() { return "GamePlay" }
		}
	};
	ls.GameOver = function() {
		return {
			"%22GamePlay%22": function() { return "GamePlay" }
		}
	};
	ls.GamePlay = function() {
		return {
			"ImgPlayer.y": function() { return ImgPlayer.y },
			"ImgBlock": function() { return ImgBlock },
			"ImgRock": function() { return ImgRock },
			"ImgStar.y": function() { return ImgStar.y },
			"%22Num%22": function() { return "Num" },
			"%22IsPlayerJump%22": function() { return "IsPlayerJump" },
			"%22equalTo%22": function() { return "equalTo" },
			"90%2Bls.round(ls.random()*6)*60": function() { return 90+ls.round(ls.random()*6)*60 },
			"%22lessThan%22": function() { return "lessThan" },
			"%22IsMakeBlock%22": function() { return "IsMakeBlock" },
			"%22GameOver%22": function() { return "GameOver" },
			"%22GameWin%22": function() { return "GameWin" },
			"Touch.touchSceneX": function() { return Touch.touchSceneX },
			"%22greaterThan%22": function() { return "greaterThan" }
		}
	};
	ls.GameWin = function() {
		return {
			"%22Title%22": function() { return "Title" }
		}
	};
})(ls || (ls = {}));