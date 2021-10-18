/* ************************************************************************** */
/*                                                                            */
/*                                                                            */
/*   algo.js   (Jeu du gratte-ciel)                                           */
/*                                                                            */
/*   By: jean-marc <jmwanc@gmail.com>                                         */
/*                                                                            */
/*   Created: 16/10/2021 by nxoo971                                           */
/*   Updated: 18/10/2021 by nxoo971                                           */
/*                                                                            */
/* ************************************************************************** */

/* function print_tab:
    - afficher le tableau
*/
function    print_tab(tab)
{
    for (var i = 0; i < 4; i++)
        if (tab[i].length <= 0)
            return;
 
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++)
        {
            /*if (i != 0 && j % 4 == 0)
                document.writeln("<br>");*/
            //document.writeln(tab[i][j]);
            console.log(tab[i][j]);
        }
    //document.writeln("<br>");
}

/* function assign_consign:
    - Assigner les bons numéros au tableau consigne
*/
function assign_consign(consign, consign_top, consign_right, consign_bottom, consign_left)
{
    for (var i = 0; i < 4; i++)
        consign[0][i] = consign_top[i];
    for (var i = 0; i < 4; i++)
        consign[1][i] = consign_right[i];
    for (var i = 0; i < 4; i++)
        consign[2][i] = consign_bottom[i];
    for (var i = 0; i < 4; i++)
        consign[3][i] = consign_left[i];
}

/* function set_data_in_label
    - assigner à chaque label sa consigne
        chacun son chacun
*/
function    set_data_in_label(consign)
{
    var labels = document.getElementsByClassName("label_consigne");
    for (var i = 0; i < labels.length; i++)
    {
        labels[i].innerHTML = consign[Math.floor(i / 4)][i % 4];
    }
}


/* function set_consign:
    - appeler la fonction assign_consign
        et inscrire les valeurs retournées dans les label
*/
function    set_consign()
{
    var consign_top = [
        [2, 3, 2, 1], [2, 2, 3, 1], [2, 3, 3, 1], [2, 1, 4, 2], [1, 3, 2, 3], [1, 2, 3, 2], [1, 3, 3, 2],
        [2, 1, 2, 3], [2, 2, 1, 2], [3, 3, 1, 2], [1, 3, 2, 2]
    ];
    var consign_right = [
        [1, 2, 3, 2], [1, 2, 3, 2], [1, 3, 2, 2], [2, 4, 1, 2], [3, 2, 2, 1], [2, 1, 3, 2], [2, 1, 2, 3],
        [3, 2, 2, 1], [2, 1, 2, 2], [2, 1, 4, 2], [2, 2, 3, 1]
    ];
    var consign_bottom = [
        [3, 2, 1, 3], [2, 2, 1, 3], [3, 1, 2, 2], [3, 3, 1, 2], [4, 2, 2, 1], [3, 2, 1, 2], [2, 1, 2, 3],
        [2, 3, 2, 1], [2, 1, 4, 3], [2, 1, 4, 2], [3, 2, 3, 1]
    ];
    var consign_left = [
        [3, 1, 2, 3], [3, 1, 2, 2], [2, 1, 3, 2], [2, 1, 3, 3], [1, 2, 2, 3], [1, 3, 2, 3], [1, 3, 3, 2],
        [2, 1, 3, 3], [3, 4, 1, 2], [3, 3, 1, 2], [1, 2, 2, 3]
    ];
    var consign = [
        [], [], [], []
    ];

    var indice = Math.floor(Math.random() * (/* max */10 - /* min */0 + 1)) + /* min */0;
    assign_consign(consign, consign_top[indice], consign_right[indice], consign_bottom[indice], consign_left[indice]);
    set_data_in_label(consign);
}

/* function put_zero:
    - placer des 0 à chaques cases des tableaux
*/
function    put_zero(tab)
{
    for (var x = 0; x < 4; x++)
        for (var y = 0; y < 4; y++)
            tab[x][y] = 0;
}

/* function colnline_has_no_double
    - vérifier que la ligne et la colonne selectionné n'ont pas  de double
*/
function    colnline_has_no_double(tab, x, y, value)
{
	for (var j = 0; j < 4; j++)
	{
		if (j != y && tab[x][y] != 0 && tab[x][j] == value)
			return (0);
		if (j != x && tab[j][y] != 0 && tab[j][y] == value)
			return (0);
	}
	return (1);
}

/* function tab_has_no_double
    - "" sur l'entierté du tableau
*/
function    tab_has_no_double(tab)
{
	for (var i = 0; i < 4; i++)
		for (var j = 0; j < 4; j++)
			if (colnline_has_no_double(tab, i, j, tab[i][j]))
				return (0);
	return (1);
}

/* function line_is_filled
    - vérifier que la ligne ne contient aucun 0
        car au tout début, je remplis le tableau de 0 partout
*/
function    line_is_filled(tab, x)
{
	for (var y = 0; y < 4; y++)
	{
		if (tab[x][y] == 0)
			return (0);
	}
	return (1);
}

/* function is_filled_good
    - vérifier qu'il y a aucun doublon sur tout le tableau
        et vérifier aussi qu'il y a aucun 0
    - fonction qui valide ou non la sortie de la fonction !
*/
function    is_filled_good(tab, consign)
{
	for (var i = 0; i < 4; i++)
	{
		for (var j = 0; j < 4; j++)
		{
			if (!colnline_has_no_double(tab, i, j, tab[i][j]) || !line_is_filled(tab, i))
				return (0);
		}
	}
	return (check_isok(tab, consign));
}

/* function place
    - fonction mère, c'est elle qui place et/ou efface/garde les bon numéros
        selon le tableau consigne
    - backtracking
*/
function    place(tab, consign, pos)
{
	var x = Math.floor(pos / 4);
	var y = pos % 4;

    if (x * x == 16)
        return ;
	if (tab[x][y] != 0)
		place(tab, consign, pos + 1);
	else
	{
		for (var index = 1; index <= 4; index++)
		{
			tab[x][y] = index;
			if (colnline_has_no_double(tab, x, y, index))
			{
				if (x % 4 == 3)
				{
					if (check_top_range(tab, consign, x) && check_bottom_range(tab, consign, x))
						place(tab, consign, pos + 1);
				}
				if (y % 4 == 3)
				{
					if (check_left_range(tab, consign, x) && check_right_range(tab, consign, x))
						place(tab, consign, pos + 1);
				}
				place(tab, consign, pos + 1);
			}
			else
				tab[x][y] = 0;
			if (is_filled_good(tab, consign))
			{
                set_data_in_input(tab);
                return ;
            }
		}
		tab[x][y] = 0;
	}
}

/* function set_data_in_input
    - assigner à chaque input sa solution
        chacun son chacun
*/
function    set_data_in_input(tab)
{
    var inputs = document.getElementsByClassName("input_user");
    for (var i = 0; i < inputs.length; i++){
        inputs[i].value = tab[Math.floor(i / 4)][i % 4];
    }
}

/* ******** PARTIE CHECK BATIMENTS ********* */

/* Check range */

/* function check_top
    - vérifier vue d'en haut si l'on voit
        le bon nombre de batiments
    - vérifie toutes les ranges
*/
function    check_top(tab, consign)
{
	for (var i = 0; i < 4; i++)
	{
		if (!check_top_range(tab, consign, i))
			return (0);
	}
	return (1);
}

/* function check_right
    - vérifier vue de droite si
        le bon nombre de batiments y est
    - vérifie toutes les ranges
*/
function    check_right(tab, consign)
{
	for (var i = 0; i < 4; i++)
	{
		if (!check_right_range(tab, consign, i))
			return (0);
	}
	return (1);
}

/* function check_bottom
    - vérifier vue d'en bas si
        le bon nombre de batiments y est
    - vérifie toutes les ranges
*/
function    check_bottom(tab, consign)
{
	for (var i = 0; i < 4; i++)
	{
		if (!check_bottom_range(tab, consign, i))
			return (0);
	}
	return (1);
}

/* function check_left
    - vérifier vue de gauche si
        le bon nombre de batiments y est
    - vérifie toutes les ranges
*/
function    check_left(tab, consign)
{
	for (var i = 0; i < 4; i++)
	{
		if (!check_left_range(tab, consign, i))
			return (0);
	}
	return (1);
}

/* function check_isok
    - vérifier sous tout les points de vue si
        le bon nombre de batiments y est
*/
function    check_isok(tab, consign)
{
	return (check_top(tab, consign) && check_bottom(tab, consign)
		 && check_right(tab, consign) && check_left(tab, consign));
}

/* function check_top_range
    - vérifier vue d'en haut si
        le bon nombre de batiments y est
    - vérifie seulement la range selectionné
*/
function    check_top_range(tab, consign, x)
{
	var max = 0;
	var value = consign[0][x];
	var count = 0;
	for (var j = 0; j < 4; j++)
	{
		if (tab[j][x] > max)
		{
			max = tab[j][x];
			count++;
		}
	}
	return (count == value);
}

/* function check_bottom_range
    - vérifier vue d'en bas si
        le bon nombre de batiments y est
    - vérifie seulement la range selectionné
*/
function    check_bottom_range(tab, consign, x)
{
	var max = 0;
	var value = consign[2][x];
	var count = 0;
	for (j = 3; j >= 0; j--)
	{
		if (tab[j][x] > max)
		{
			max = tab[j][x];
			count++;
		}
	}
	return (count == value);
}

/* function check_left_range
    - vérifier vue de gauche si
        le bon nombre de batiments y est
    - vérifie seulement la range selectionné
*/
function    check_left_range(tab, consign, x)
{
	var max = 0;
	var value = consign[3][x];
	var count = 0;
	for (var j = 0; j < 4; j++)
	{
		if (tab[x][j] > max)
		{
			max = tab[x][j];
			count++;
		}
	}
	return (count == value);
}

/* function check_right_range
    - vérifier vue de droite si
        le bon nombre de batiments y est
    - vérifie seulement la range selectionné
*/
function    check_right_range(tab, consign, x)
{
	var max = 0;
	var value = consign[1][x];
	var count = 0;
	for (var j = 3; j >= 0; j--)
	{
		if (tab[x][j] > max)
		{
			max = tab[x][j];
			count++;
		}
	}
	return (count == value);
}

/* ******** FIN PARTIE ALGO ********* */

/* PARTIE USER */

/* function get_user_input
    - Obtenir les infos des labels ou inputs et les inserer
        dans la tableau souhaité
*/
function    get_user_input(node, tab)
{
    var inputs = document.getElementsByClassName(node);
    for (var i = 0; i < inputs.length; i++)
    {
        var x = Math.floor(i / 4);
        var y = i % 4;
        if (node === "input_user")
            tab[x][y] = inputs[i].value;
        else
            tab[x][y] = inputs[i].innerHTML;
    }
}

/* function new_map
    - Générer une nouvelle "map" de consigne
        grâce à set_consign() et reset les inputs !
*/
function    new_map()
{
    set_consign();
    
    // reset input to 0
    var tab = [[],[],[],[]];
    put_zero(tab);
    set_data_in_input(tab);
}

/* function begin
    - Créer un tableau qui va contenir la solution de la grille
    - Créer un tableau de consigne et celui pour l'user,
        récupérer les infos des consigne
    - Appeler la fonction place
*/
function    begin()
{
    var tab = [
        [], [], [], []
    ];

    var consign = [
        [], [], [], []
    ];

    get_user_input("label_consigne", consign);
    put_zero(tab);
    place(tab, consign, 0);
    console.log("consigne");
    console.log(consign);
}

/* function check_entries_user
    - Récupérer les entrées du user input et tout stocker dans tab
    - Récupérer les entrées des consigne label et tout stocker dans consigne
    - Vérifier si la solution proposée par l'user et valide grâce
        à is_filled_good()
*/
function check_entries_user()
{
    var tab = [
        [], [], [], []
    ];
    var consign = [
        [], [], [], []
    ];

    get_user_input("input_user", tab);
    get_user_input("label_consigne", consign);
    console.log(consign);
    console.log(tab);

    var res = document.getElementById("isGood");
    if (!is_filled_good(tab, consign))
        res.innerHTML = "t'y es pas du tout ..";
    else
        res.innerHTML = "Bien ouej !";
}

/* Au chargement de la page
    - Générer une nouvelle map et inscrire tous les inputs à 0
    - Assigner chaque fonction à son élément
*/
window.onload = function(){
    new_map();

    document.getElementById("btnSolution").onclick = function(){
        begin();
    };
    document.getElementById("btnMap").onclick = function(){
        new_map();
    };
    document.getElementById("btnTest").onclick = function(){
        check_entries_user();
    };
};