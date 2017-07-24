using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Learnbook_Data.Data;

namespace Learnbook_Data.Migrations
{
    [DbContext(typeof(LearnbookContext))]
    [Migration("20170617033729_studentProperty")]
    partial class studentProperty
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Learnbook_Data.Models.Assignment", b =>
                {
                    b.Property<int>("AssignmentId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AllowUpload");

                    b.Property<int>("AverageScore");

                    b.Property<int>("CourseId");

                    b.Property<DateTime>("DueDate");

                    b.Property<string>("FileType");

                    b.Property<int>("MaxScore");

                    b.Property<string>("Objective");

                    b.Property<DateTime>("StartDate");

                    b.Property<string>("Title");

                    b.Property<string>("UploadDirectory");

                    b.HasKey("AssignmentId");

                    b.HasIndex("CourseId");

                    b.ToTable("Assignment");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Course", b =>
                {
                    b.Property<int>("CourseId");

                    b.Property<string>("Code");

                    b.Property<int>("Credit");

                    b.Property<int>("DepartmentId");

                    b.Property<string>("Subject");

                    b.Property<string>("Term");

                    b.Property<string>("Title");

                    b.Property<int>("Year");

                    b.HasKey("CourseId");

                    b.HasIndex("DepartmentId");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("Learnbook_Data.Models.CourseAssignment", b =>
                {
                    b.Property<int>("CourseId");

                    b.Property<int>("UserId");

                    b.HasKey("CourseId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("CourseAssignment");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Department", b =>
                {
                    b.Property<int>("DepartmentId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("UserId");

                    b.HasKey("DepartmentId");

                    b.HasIndex("UserId");

                    b.ToTable("Department");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Enrollment", b =>
                {
                    b.Property<int>("EnrollId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CourseId");

                    b.Property<int?>("Grade");

                    b.Property<string>("Term");

                    b.Property<int>("UserId");

                    b.Property<int>("Year");

                    b.HasKey("EnrollId");

                    b.HasIndex("CourseId");

                    b.HasIndex("UserId");

                    b.ToTable("Enrollment");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Office", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("Days");

                    b.Property<string>("Hours");

                    b.Property<string>("Location");

                    b.Property<string>("OfficeNumber");

                    b.HasKey("UserId");

                    b.ToTable("Office");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("RoleName");

                    b.HasKey("RoleId");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("Learnbook_Data.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateCreated");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email");

                    b.Property<string>("FacebookLink");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("ImageUrl");

                    b.Property<bool>("IsActive");

                    b.Property<DateTime?>("LastLogin");

                    b.Property<string>("LastName");

                    b.Property<string>("LinkedInLink");

                    b.Property<string>("Password")
                        .IsRequired();

                    b.Property<string>("Summary");

                    b.Property<string>("TwitterLink");

                    b.Property<string>("Username")
                        .IsRequired();

                    b.HasKey("UserId");

                    b.ToTable("User");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");
                });

            modelBuilder.Entity("Learnbook_Data.Models.UserRoles", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRole");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Instructor", b =>
                {
                    b.HasBaseType("Learnbook_Data.Models.User");

                    b.Property<int?>("CourseId");

                    b.Property<string>("Department");

                    b.HasIndex("CourseId");

                    b.ToTable("Instructor");

                    b.HasDiscriminator().HasValue("Instructor");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Student", b =>
                {
                    b.HasBaseType("Learnbook_Data.Models.User");

                    b.Property<string>("Major");

                    b.ToTable("Student");

                    b.HasDiscriminator().HasValue("Student");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Assignment", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Course", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Department")
                        .WithMany("Courses")
                        .HasForeignKey("DepartmentId");
                });

            modelBuilder.Entity("Learnbook_Data.Models.CourseAssignment", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Course", "Course")
                        .WithMany("CourseAssignments")
                        .HasForeignKey("CourseId");

                    b.HasOne("Learnbook_Data.Models.Instructor", "Instructor")
                        .WithMany("CourseAssignments")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Department", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Instructor", "Instructor")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Enrollment", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Course", "Course")
                        .WithMany("Enrollments")
                        .HasForeignKey("CourseId");

                    b.HasOne("Learnbook_Data.Models.Student", "Student")
                        .WithMany("Enrollments")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Office", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Instructor", "Instructor")
                        .WithOne("Office")
                        .HasForeignKey("Learnbook_Data.Models.Office", "UserId");
                });

            modelBuilder.Entity("Learnbook_Data.Models.UserRoles", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId");

                    b.HasOne("Learnbook_Data.Models.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Learnbook_Data.Models.Instructor", b =>
                {
                    b.HasOne("Learnbook_Data.Models.Course")
                        .WithMany("Instructors")
                        .HasForeignKey("CourseId");
                });
        }
    }
}
