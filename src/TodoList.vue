<template>
  <div class="display_form">
    <form @submit="addTask">
      <input v-model="newTask" placeholder="Ajouter une tâche" />
      <button type="submit">Ajouter</button>
    </form>

    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
        :class="{ completed: task.completed }"
      >
        <p id="display_task">{{ task.name }}</p>
        <button @click="completeTask(task.id)">Marquer comme terminée</button>
        <button @click="removeTask(task.id)">Supprimer</button>
      </li>
    </ul>
    <button @click="sendReminderEmail">Envoyer un email de rappel</button>
  </div>
</template>

<script>
//const nodemailer = require("nodemailer");

export default {
  data() {
    return {
      newTask: "",
      tasks: [
        { id: 1, name: "Faire la vaisselle", completed: false },
        { id: 2, name: "Faire le ménage", completed: false },
        { id: 3, name: "Réviser pour les examens", completed: false },
      ],
    };
  },
  methods: {
    addTask(event) {
      // Empêcher le formulaire de soumettre les données
      event.preventDefault();

      // Ajouter la nouvelle tâche à la liste des tâches existantes
      this.tasks.push({
        id: Date.now(), // utiliser l'horodatage actuel comme identifiant unique pour la tâche
        name: this.newTask, // utiliser la valeur du champ de formulaire comme nom de la tâche
        completed: false, // la nouvelle tâche est toujours non complétée
      });

      // Réinitialiser la valeur du champ de formulaire
      this.newTask = "";
    },
    completeTask(taskId) {
      // Trouver l'index de la tâche à marquer comme terminée dans la liste des tâches existantes
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

      // Vérifier si la tâche a été trouvée
      if (taskIndex !== -1) {
        // Récupérer la tâche à marquer comme terminée
        const task = this.tasks[taskIndex];

        // Mettre à jour la propriété completed de la tâche
        task.completed = !task.completed;
      }
    },

    removeTask(taskId) {
      // Trouver l'index de la tâche à supprimer dans la liste des tâches existantes
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

      // Vérifier si la tâche a été trouvée
      if (taskIndex !== -1) {
        // Supprimer la tâche de la liste des tâches existantes
        this.tasks.splice(taskIndex, 1);
      }
    },
    /* sendReminderEmail() {
      // Configurer les paramètres de l'email
      const mailOptions = {
        from: "noreply@example.com",
        to: "user@example.com",
        subject: "Rappel de tâches",
        text: "Voici la liste de vos tâches à accomplir :",
      };

      // Ajouter les tâches à la liste de l'email
      this.tasks.forEach((task) => {
        mailOptions.text += `\n- ${task.name}`;
      });

      // Créer un transporteur d'email
      const transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false,
        auth: {
          user: "username",
          pass: "password",
        },
      });

      // Envoyer l'email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email envoyé : " + info.response);
        }
      });
    }, */
  },
};
</script>