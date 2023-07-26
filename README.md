# Procédure de remplacement des séries temporelles

Il est requis d'avoir nodejs installer(https://nodejs.org/en/download/)

1. Ouvrir un terminal.
2. Cloner le projet avec la commande `git clone git@github.com:CS-SI/MTE.git`.
   Ou mettre à jour le projet avec la commande `git pull`.
3. Se rendre à la racine du projet.
4. Se mettre sur la branche master `git checkout master`
5. Installer les dependences avec la commande `npm install`.
6. Supprimer le contenu du répertoire `public/series`.
7. Copier les nouvelles séries dans le répertoire `public/series`.
8. Afficher les changements avec `git status`.
9. Ajouter les changements désirés `git add < fichier désirés >`.
10. Ajouter un message avec `git commit -m "< message >"`.
11. Envoyer les changements sur la branch "master" `git push`.
12. Deployer les changements avec la commande `npm run deploy-pipeline`.
13. Le message `Files are stored in folders` confirmera l'ajout des fichiers.
14. Le message `Geojson rewritten successfully` confirmera la réécriture du Geojson
    afin afficher les réservoirs dont on a au minimum une série temporelle.
15. Le message `Published` confirmera le deploiement.
